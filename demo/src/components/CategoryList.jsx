import React from 'react';
import CategoryItem from '../components/CategoryItem';
import { useNavigate } from 'react-router-dom';

function CategoryList({ catalog = [] }) {
	return (
		<>
			<div className='list'>
				{catalog.map((e) => (
					<CategoryItem key={e.idCategory} {...e} />
				))}
			</div>
		</>
	);
}

export default CategoryList;
