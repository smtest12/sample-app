
import { Button } from 'antd';

interface IProps {
    title : string
}

export function PrimaryButton(props:IProps){
    return (
        <>
            <Button type="primary">{props.title}</Button>
        </>
    )
}

export function SecondaryButton(props:IProps){
    return (
        <>
            <Button>{props.title}</Button>
        </>
    )
}