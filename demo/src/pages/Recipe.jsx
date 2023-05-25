import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { getMealById } from '../api';
import { Preloader } from '../components/Preloader';

function Recipe() {
	const { id } = useParams();
	const [recipe, setRecipte] = useState({});
	const navigate = useNavigate();

	useEffect(() => {
		getMealById(id).then((data) => setRecipte(data.meals[0]));
	}, [id]);

	return (
		<div>
			{!recipe.idMeal ? (
				<Preloader />
			) : (
				<div className='recipe'>
					<h3>{recipe.strMeal}</h3>
					<img src={recipe.strMealThumb} alt={recipe.strMeal} />
					<h6>Category: {recipe.strCategory}</h6>
					{recipe.strArea ? <h6>Area: {recipe.strArea}</h6> : null}
					<div className='table-ingredients'>
						<table className='centered ing-table'>
							<thead>
								<tr>
									<th>Ingredient</th>
									<th>Measure</th>
								</tr>
							</thead>
							<tbody>
								{Object.keys(recipe).map((key) => {
									if (
										key.includes('Ingredient') &&
										recipe[key]
									) {
										return (
											<tr key={key}>
												<td>{recipe[key]}</td>
												<td>
													{
														recipe[
															`strMeasure${key.slice(
																13
															)}`
														]
													}
												</td>
											</tr>
										);
									}
									return null;
								})}
							</tbody>
						</table>
						<p>{recipe.strInstructions}</p>
					</div>

					{recipe.strYoutube ? (
						<div className='row'>
							<h5>Video Recipe</h5>
							<iframe
								title={id}
								src={`https://www.youtube.com/embed/${recipe.strYoutube.slice(
									-11
								)}`}
								allowfullscreen
							/>
						</div>
					) : null}
				</div>
			)}
			<button className='btn' onClick={() => navigate(-1)}>
				Go back
			</button>
		</div>
	);
}

export { Recipe };
