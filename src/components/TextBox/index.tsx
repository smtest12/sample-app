
import { Input } from 'antd';

interface IProps {
    placeholder : string,
    type?:string
}


export default function InputBox(props:IProps){
    if(props.type === 'password'){
            return <Input.Password placeholder={props.placeholder} />
    }else{
            return <Input placeholder={props.placeholder} />
    }
}


