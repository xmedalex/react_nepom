import React from 'react';

class Search extends React.Component {
	state = {
		search: '',
		type: 'all',
	};

	handleKey = (e) => {
		if (e.key === 'Enter') {
			this.props.searchMovies(this.state.search, this.state.type);
		}
	};

	handleFilter = (event) => {
		this.setState(
			() => ({ type: event.target.dataset.type }),
			() => {
				this.props.searchMovies(this.state.search, this.state.type);
			}
		);
	};

	render() {
		return (
			<div className='row'>
				<div className='input-field'>
					<input
						placeholder='Search'
						id='email_inline'
						type='text'
						className='validate'
						value={this.state.search}
						onChange={(e) =>
							this.setState({ search: e.target.value })
						}
						onKeyDown={this.handleKey}
					/>
					<button
						className='btn search-btn'
						onClick={this.handleFilter}
					>
						Search
					</button>
				</div>
				<label>
					<input
						class='with-gap'
						name='type'
						type='radio'
						data-type='all'
						onChange={this.handleFilter}
						checked={this.state.type === 'all'}
					/>
					<span>All</span>
				</label>
				<label>
					<input
						class='with-gap'
						name='type'
						type='radio'
						data-type='movie'
						onChange={this.handleFilter}
						checked={this.state.type === 'movie'}
					/>
					<span>Movies only</span>
				</label>
				<label>
					<input
						class='with-gap'
						name='type'
						type='radio'
						data-type='series'
						onChange={this.handleFilter}
						checked={this.state.type === 'series'}
					/>
					<span>Series only</span>
				</label>
			</div>
		);
	}
}

export default Search;
