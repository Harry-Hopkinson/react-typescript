type GreetProps = {
    name: string;
    notification: number;
}

export const Greet = (props: GreetProps) => {
    return (
        <div>
            <h2>Welcome {props.name}! You have {props.notification} unread messages.</h2>
        </div>
    )
}