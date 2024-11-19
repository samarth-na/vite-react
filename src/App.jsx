function Header({ name }) {
    return <h1> hello {name}</h1>;
}
export default function App() {
    return (
        <div className="grid gap-4">
            <Header name="bob"> </Header>
            <h1 className="underline bg-yellow-400">Hello world!</h1>
        </div>
    );
}
