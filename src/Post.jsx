export function Post(props) {
    return (
        <div>
            <strong>{props.auth}</strong>

            <p>{props.content}</p>
        </div>
    )
}