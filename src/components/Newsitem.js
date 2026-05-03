import React from 'react'

const Newsitem = (props) => {

        let {title, description,imgUrl,newsUrl,author,date,source} = props;
        return (
            <div className="my-3">
                <div className="card my-3">
                    <div style={{display: 'flex',
                        justifyContent: 'flex-end',
                        position: 'absolute',
                        right: '0'
                    }}>

                <span className="badge rounded-pill bg-danger">
                            {source}
                    </span>
                    </div>
                <img src={!imgUrl ? "https://www.reuters.com/resizer/v2/G2GUF5FCK5O6PJANOWZPF5MIMY.jpg?auth=aa1791cdc0ac5f9b9e0e18f4433e0021d6d68bf3f3d28503fd330c0562142b9c&height=1005&width=1920&quality=80&smart=true" : imgUrl} className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">{title} </h5>
                        <p className="card-text">{description}...</p>
                        <p className="card-text"><small className="text-muted">By {!author?"Unknown":author} on {new Date(date).toGMTString()}</small></p>
                        <a href={newsUrl} target="_blank" className="btn btn-sm btn-primary btn-dark" rel="noreferrer">Read More</a>
                    </div>
            </div>
            </div>
        )
}

export default Newsitem
