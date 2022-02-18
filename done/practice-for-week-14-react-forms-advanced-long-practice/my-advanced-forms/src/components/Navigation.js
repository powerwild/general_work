import { NavLink } from "react-router-dom"

export const Navigation = () => {
    return (
        <div className='navigation'>
            <NavLink to='/sample-survey'>Sample Survey</NavLink>
            <NavLink to='/sensory-survey'>Sensory Preferences</NavLink>
            <NavLink to='/bonus-survey'>Bonus Survey</NavLink>
            <NavLink to='/report'>Report</NavLink>
            <NavLink to='/'>Home</NavLink>
        </div>
    )
}
