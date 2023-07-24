
const getUsers = async (timeout: number) => {
    await new Promise(resolve => setTimeout(resolve, timeout));
    const res = await fetch("https://jsonplaceholder.typicode.com/users", { cache: 'no-store' });
    const users = await res.json();
    return users;
}

export default async function UserList({ timeout }: { timeout: number; }) {
    const users = await getUsers(timeout);

    return <div>
        {JSON.stringify(users)}
    </div>;
}

