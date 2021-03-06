import React from "react";
import Query from "../Query";
import { Link } from "react-router-dom";

import CATEGORIES_QUERY from "../../queries/category/categories";

const Nav = () => {
    return (
        <div>
            <Query query={CATEGORIES_QUERY} id={null}>
                {({ data: { categories } }) => {
                    return (
                        <div>
                            <nav data-uk-navbar>
                                <div className="uk-navbar-left">
                                    <ul className="uk-navbar-nav">
                                        <li>
                                            <Link to="/" className='selection'>All</Link>
                                        </li>
                                    </ul>
                                </div>

                                <div className="uk-navbar-left">
                                    <ul className="uk-navbar-nav">
                                        {categories.map((category, i) => {
                                            return (
                                                <li key={category.slug} className='selection'>
                                                    <Link
                                                        to={`/category/${category.slug}`}
                                                        className="uk-link-reset nav-font"
                                                    >
                                                        {category.name}
                                                    </Link>
                                                </li>
                                            );
                                        })}
                                    </ul>
                                </div>
                            </nav>
                        </div>
                    );
                }}
            </Query>
        </div>
    );
};

export default Nav;