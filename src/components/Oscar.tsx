type OscarProps = {
    children: React.ReactNode // if on react 16 or older, import react 
}
export const Oscar = (props: OscarProps) => {
    return <div>{props.children}</div>
}