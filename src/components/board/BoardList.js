import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';

const BoardList = ({contents}) => {
    return (
        <table>
            <thead>
                <tr>
                    <th colSpan="5" className="text-right">
                    <Link to="/write" className="btn btn-primary">
                        API 등록
                    </Link>
                    </th>
                </tr>
                <tr>
                    <th>No</th>
                    <th>API ID</th>
                    <th>API 상품 이름</th>
                </tr>
            </thead>
            <tbody>
                {contents.map(content =>
                    <tr key={content.id}>
                        <td>{content.id}</td>
                        <td>
                            <Link to={'/board/' + content.id}>{content.ID}</Link>
                        </td>
                        <td>{content.name}</td>
                    </tr>
                        )}
            </tbody>
        </table>
    )
}


BoardList.propTypes = {
    contents: PropTypes.array.isRequired
}

export default BoardList;