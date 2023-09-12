const React = require('react');
const client = require('../client');
const {Link} = require('react-router-dom')

class HomePage extends React.Component {
	constructor(props) {
		super(props);
		this.state = {instrumentos: [],musicos: []};
	}
	componentDidMount() {

		client({method: 'GET', path: '/api/instrumentos'}).done(response => {
			this.setState({instrumentos: response.entity._embedded.instrumentos});
		});

		client({method: 'GET', path: '/api/musicos'}).done(response => {
			this.setState({musicos: response.entity._embedded.musicos});
		});

	}
	render() {
		return (
			<>
				<h1>Hola, soy Adrian Mamani</h1>
				<Titulo entidad={"Instrumentos"} emoji={"🎸"}/>
				<InstrumentoList instrumentos={this.state.instrumentos}/>
				<hr />
				<Titulo entidad={"Musicos"} emoji={"🧑‍🎤"}/>
				<hr />
				<MusicoList musicos={this.state.musicos}/>
        <Link to="/nuevo-musico">nuevo musico</Link>
			</>
		)
	}
}

const Titulo = ({entidad,emoji}) => {
	return (
		<>
			<hr/>
			<h2>Lista de {entidad}</h2>
			<hr/>
			Lista {emoji} completa de Instrumentos {entidad}
		</>
	)
}

class InstrumentoList extends React.Component{
	render() {
		const instrumentos = this.props.instrumentos.map(instrumento =>
			<Instrumento key={instrumento._links.self.href} instrumento={instrumento}/>
		);
		return (
			<table>
				<tbody>
					<tr>
						<th>Nombre</th>
						<th>Categoría</th>
						<th>Descripción</th>
					</tr>
					{instrumentos}
				</tbody>
			</table>
		)
	}
}
class MusicoList extends React.Component{
	render() {
		const musicos = this.props.musicos.map(musico =>
			<Musico key={musico._links.self.href} musico={musico}/>
		);
		return (
			<table>
				<tbody>
					<tr>
						<th>Nombre</th>
					</tr>
					{musicos}
				</tbody>
			</table>
		)
	}
}

class Instrumento extends React.Component{
	render() {
		return (
			<tr>
				<td>{this.props.instrumento.nombre}</td>
				<td>{this.props.instrumento.categoria}</td>
				<td>{this.props.instrumento.descripcion}</td>
			</tr>
		)
	}
}
class Musico extends React.Component{
	render() {
		return (
			<tr>
				<td>{this.props.musico.nombre}</td>
			</tr>
		)
	}
}

module.exports = HomePage;