import logo from '../_assets/logo.png';

export const Header = () => {
    return (
        <div className='header'>
            <img src={logo} />
            <h1>Survey Tool</h1>
            <h3>Change Later</h3>
        </div>
    )
}
