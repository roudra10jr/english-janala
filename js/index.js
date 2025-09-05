// console.log("connected");

const loadLessons = () => {
	const url = "https://openapi.programming-hero.com/api/levels/all";
	fetch(url) //promise of response
		.then((res) => res.json()) //promise of json data
		.then((json) => displayLessons(json.data));
};
const displayLessons = (lessons) => {
	// console.log(lessons);
	// 1. get the container & empty
	// 2. get into every lesson
	// 3. create Element
	// 4. append into container

	const levelContainer = document.getElementById("level-container");
	levelContainer.innerHTML = " ";

	lessons.forEach((lesson) => {
		// console.log(lesson);

		const btnDiv = document.createElement("div");
		btnDiv.innerHTML = `
                   <button class="btn btn-outline btn-primary">
                        <i class="fa-solid fa-book-open-reader"></i> Lesson -${lesson.level_no}
                    </button>
        
        
        `;
		levelContainer.appendChild(btnDiv);
	});
};

loadLessons();
