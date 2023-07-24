import { Suspense } from "react";
import UserList from "./UserList";

export default async function Home() {

    return <div>
        <Suspense fallback={<div>Loading...</div>}>
            User 1
            <UserList timeout={1000} />
        </Suspense>
        <Suspense fallback={<div>Loading...</div>}>
            User 2
            <UserList timeout={2000} />
        </Suspense>
        <Suspense fallback={<div>Loading...</div>}>
            User 3
            <UserList timeout={3000} />
        </Suspense>
    </div>;
}

