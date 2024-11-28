import { Button, Typography } from "@mui/material"

const Navbar = (props) => {
const handleLogOut=()=>{
    props.setIsLogin(!props.isLogin)
    props.setSelectedTab('')
}
    return <div style={{ borderBottom: '2px solid gray', height: '40px', padding: '0 2rem' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div style={{ display: 'flex', gap: '2rem' }}>
                <div>
                    <Typography variant="h6" sx={{ fontWeight: 'bold', color: props.selectedTab === 'DashBoard' ? "blue" : '', cursor: 'pointer' }} onClick={() => props.setSelectedTab("DashBoard")}>Dashboard</Typography>
                </div>
                <div>
                    <Typography variant="h6" sx={{ fontWeight: 'bold', color: props.selectedTab === 'TaskList' ? "blue" : '', cursor: 'pointer' }} onClick={() => props.setSelectedTab("TaskList")}>Task list</Typography>
                </div>
            </div>
            <div>
                {props.isLogin && <Button variant="contained" color="secondary" onClick={()=>handleLogOut()}>Sign out</Button>}
            </div>
        </div>


    </div>
}
export default Navbar