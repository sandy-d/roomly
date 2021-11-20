import { Link } from 'react-router-dom';
import { useRecoilValue } from 'recoil';

import { authAtom } from '_state';

export { Home };

function Home() {
    const auth = useRecoilValue(authAtom);

    return (
        <div className="p-4">
            <div className="container">
                <h1>Hi {auth?.firstName}!</h1>
                <p>Welcome to Roomly</p>
                <p>Guest room booking application :)</p>
                <p><Link to="/users">Manage Users</Link></p>
            </div>
        </div>
    );
}
