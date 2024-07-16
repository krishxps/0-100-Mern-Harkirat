// --------------------------------------------------------------------------------
// Imports
// --------------------------------------------------------------------------------
const express = require('express');
const { authMiddleware } = require('../middleware');
const { Account } = require('../db');
const { default: mongoose } = require('mongoose');

// --------------------------------------------------------------------------------
// Routes
// --------------------------------------------------------------------------------
const router = express.Router();

// --------------------------------------------------------------------------------
// Account Routes
// --------------------------------------------------------------------------------
router.get("/balance", authMiddleware, async (req, res) => {
    const account = await Account.findOne({
        userId: req.userId
    });

    res.json({
        balance: account.balance
    })
});

router.post("/transfer", authMiddleware, async (req, res) => {
    const session = await mongoose.startSession();
    session.startTransaction();

    try {
        const { amount, to } = req.body;
        const account = await Account.findOne({ userId: req.userId }).session(session);

        if (!account || account.balance < amount) {
            throw new Error("Insufficient balance");
        }

        const toAccount = await Account.findOne({ userId: to }).session(session);
        if (!toAccount) {
            throw new Error("Invalid account");
        }

        await Account.updateOne({ userId: req.userId }, { $inc: { balance: -amount } }).session(session);
        await Account.updateOne({ userId: to }, { $inc: { balance: amount } }).session(session);
        console.log(`Transfer of ${amount} units completed successfully`);
        await session.commitTransaction();
        res.json({ message: "Transfer successful" });
    } catch (error) {
        await session.abortTransaction();
        console.error("Error in transaction:", error);
        res.status(500).json({ message: "Transaction aborted due to error" });
    } finally {
        session.endSession();
    }
});

// --------------------------------------------------------------------------------
// Exports
// --------------------------------------------------------------------------------
module.exports = router;