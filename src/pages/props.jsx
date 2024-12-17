function Name({ name }) {
    return <h1> hello {name}</h1>;
}
export default function Props() {
    return (
        <div className="grid gap-4">
            <Name name="bob"> </Name>
        </div>
    );
}
