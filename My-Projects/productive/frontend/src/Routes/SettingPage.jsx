import { TimeDisplay } from '../components/TimeDisplay';
import { ActionButton } from '../components/ActionButton';
import { NAME } from '../constants/constants';
import { useNavigate } from 'react-router-dom';

export const SettingsPage = () => {
    const navigate = useNavigate();
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#171111] text-white">
      <h1 className="text-4xl font-bold mb-8">{NAME}</h1>
      <div className="flex gap-4 mb-8">
        <TimeDisplay value="00" label="Hours" />
        <TimeDisplay value="25" label="Minutes" />
        <TimeDisplay value="00" label="Seconds" />
      </div>
      <div className="flex flex-col items-center gap-4">
        <ActionButton text="Save" bgColor="bg-[#df2020]" additionalText="or press Space to start" onClick={() => navigate('/')}/>
        <ActionButton text="Go Back" bgColor="bg-transparent" borderColor="border border-white" onClick={() => navigate('/')}/>
      </div>
    </div>
  );
};

export default SettingsPage;
