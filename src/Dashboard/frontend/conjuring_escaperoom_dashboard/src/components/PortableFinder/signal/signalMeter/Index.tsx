import voltmeterImg from '@/../public/voltmeter.png'
import Divider from '@/components/Divider'
import Switch from '@/components/Form/SwitchButton'
import Image from 'next/image'

interface SignlaMeterInterface {

}

const SignalMeter: React.FC<SignlaMeterInterface> = ({}) => {

    const signals = [
        {
          title: "فرستنده",
          ip: "192.168.0.100",
          rssi: 0,
          active: false,
          bluetoothUUID: "123-13e123-12412-dfvds123",
        },
        {
          title: "فرستنده",
          ip: "192.168.0.100",
          rssi: 0,
          active: false,
          bluetoothUUID: "123-13e123-12412-dfvds123",
        },
        {
          title: "فرستنده",
          ip: "192.168.0.100",
          rssi: 0,
          active: false,
          bluetoothUUID: "123-13e123-12412-dfvds123",
        }
        ,
        {
          title: "فرستنده",
          ip: "192.168.0.100",
          rssi: 0,
          active: false,
          bluetoothUUID: "123-13e123-12412-dfvds123",
        }
        ,
      ];

    return (
        <div className='flex flex-col items-center justify-start w-full'>
            <Image src={voltmeterImg} alt='Voltmeter Image' width={200}/>
            <div className='w-full'>
                <Divider />
            </div>
            <div  className='flex flex-row justify-between w-full items-center p-4'>
                <div>
                    <Switch className='mt-4'/>
                </div>
                <h4>ولت متر</h4>
            </div>
            <div className='w-full'>
                <Divider />
            </div>
        </div>
    )
}

export default SignalMeter