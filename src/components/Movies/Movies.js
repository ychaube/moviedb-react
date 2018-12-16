import React from 'react';
import './Movies.css';

//Library imports
import 'font-awesome/css/font-awesome.min.css';

const Movies = (param) => {

    const bannerSrc = "https://image.tmdb.org/t/p/w300_and_h450_bestv2" + param.poster;
    const overviewTxt = param.desc.length > 200 ? param.desc.substring(0, 200).trim() + "..." : param.desc;
    const hyperlink = "https://www.themoviedb.org/movie/" + param.id;

    let stars;
    if (param.rating > 0) {
        switch (Math.floor(param.rating)) {
            case 1:
            case 2: stars = <span>
                                <span className="fa fa-star Rating-Checked" />
                            </span>
                    break;
            case 3:
            case 4: stars = <span>
                                <span className="fa fa-star Rating-Checked" />
                                <span className="fa fa-star Rating-Checked" />
                            </span>
                    break;
            case 5:
            case 6: stars = <span>
                                <span className="fa fa-star Rating-Checked" />
                                <span className="fa fa-star Rating-Checked" />
                                <span className="fa fa-star Rating-Checked" />
                            </span>
                    break;
            case 7:
            case 8: stars = <span>
                                <span className="fa fa-star Rating-Checked" />
                                <span className="fa fa-star Rating-Checked" />
                                <span className="fa fa-star Rating-Checked" />
                                <span className="fa fa-star Rating-Checked" />
                            </span>
                    break;
            case 9:
            case 10: stars = <span>
                                <span className="fa fa-star Rating-Checked" />
                                <span className="fa fa-star Rating-Checked" />
                                <span className="fa fa-star Rating-Checked" />
                                <span className="fa fa-star Rating-Checked" />
                                <span className="fa fa-star Rating-Checked" />
                            </span>
                    break;
            default:    stars = <span>No ratings</span>                        
                break;
        }
    } else {
        stars = <span>No ratings</span> 
    }

    return (
        <div className="Movie-Container">
            <div className="Movie-Item">
                <div className="Banner">
                    <img src={bannerSrc} alt="Not found!" />
                </div>
                <div className="Details">
                    <div className="Details-Container">
                        <div className="Name">{param.name}</div>
                        <table className="Tabular">
                            <tbody>
                                <tr>
                                    <td className="Details-Header">Release date</td>
                                    <td className="Details-Value">{param.releaseDate}</td>
                                </tr>
                                <tr>
                                    <td className="Details-Header">Rating</td>
                                    <td className="Details-Value">{stars}</td>
                                </tr>
                            </tbody>
                        </table>
                        <div className="Overview">{overviewTxt}</div>
                    </div>
                    <div className="Link-Container">
                        <a href={hyperlink}>Read more</a>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default Movies;