import React, { Component } from 'react';




const Aside = ({ item }) => {
    item.map(item => console.log(item.caption))
    return (
        <div className='container-fluid'>
            <div className="row">
                <aside>
                    <ul>
                        {
                            item.map(item => (
                                <li key={item.id}>
                                    {item.caption}
                                </li>
                            ))
                        }
                    </ul>
                </aside>
            </div>
        </div>
    )

}

/*<ul>
                    {
                        item.map(item => (
                            <li key={item.id}>
                                {item.caption}
                            </li>
                        ))
                    }
                </ul>*/

export default Aside;