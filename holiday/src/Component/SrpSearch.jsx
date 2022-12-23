import { Link } from "react-router-dom";
import { useEffect } from "react";
function SrpSearch(props) {

    return (<>

        <div className="container">

            <form className="d-flex" role="search">
                <input className="form-control me-2" type="search" value={props.text} placeholder="Search" onChange={(e) => { props.setText(e.target.value); props.filterText() }} aria-label="Search" />

                <Link className="btn btn-outline-success" to={props.filterTextCalled === false ? "/holiday/SRP" : "/holiday"} rel="noreferrer">
                    Search
                </Link>

            </form>

            <div>

                <table className='table table-striped'>
                    <tbody>

                        {
                            props.tempData.map((item, idx) => {
                                return (
                                    <tr key={idx} >

                                        <td><a onClick={() => props.resetFilter(item.packageName)}>  {item.packageName} </a></td>

                                    </tr>
                                )
                            })
                        }

                    </tbody>
                </table>
            </div>
        </div>
    </>
    )
}
export default SrpSearch;