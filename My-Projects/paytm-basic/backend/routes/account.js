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
    // Session is used to handle transactions in the database because it is an asynchronous operation that returns a promise that resolves when the transaction is committed. if any reason fails, the transaction is aborted and the promise is rejected. 
    const session = await mongoose.startSession();

    session.startTransaction();
    const { amount, to } = req.body;

    const account = await Account.findOne({ userId: req.userId }).session(session);
    
    if (!account || account.balance < amount) {
        await session.abortTransaction();
        return res.status(400).json({
            message: "Insufficient balance"
        });
    }

    const toAccount = await Account.findOne({ userID: to }).session(session);
    
    if (!toAccount) {
        await session.abortTransaction();
        return res.status(400).json({
            message: "Invalid account"
        });
    }

    await Account.updateOne({ userId: req.userId }, { $inc: { balance: -amount } }).session(session);
    await Account.updateOne({ userID: to }, { $inc: { balance: amount } }).session(session);

    await session.commitTransaction();

    res.json({
        message: "Transfer successful"
    });
});

// --------------------------------------------------------------------------------
// Exports
// --------------------------------------------------------------------------------
module.exports = router;