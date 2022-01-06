type GreetProps = {
    name: string;
    notification: number;
    isLoggedIn: boolean;
}

export const Greet = (props: GreetProps) => {
    return (
        <div>
            <h2>
                {
                    props.isLoggedIn ?  "Welcome ${props.name}! You have ${props.notification} new notifications" : "Welcome Guest"
                }
            </h2>
        </div>
    )
}