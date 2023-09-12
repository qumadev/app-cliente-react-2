
const React = require('react');
const { Link } = require('react-router-dom');

const NuevoMusicoPage = () => {
    return (
        <>
            <h1>Nuevo Musico</h1>
            <Link to="/">volver</Link>
        </>
    )
}

module.exports = NuevoMusicoPage;