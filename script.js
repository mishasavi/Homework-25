let completedTrue = 0;
let completedFalse = 0;
let jsonsParsed = 0;

const statString = document.createElement("p");
statString.textContent = "";
document.body.appendChild(statString);
statString.style.display="none";

sendPostId.onclick = () => {
    fetch(`https://jsonplaceholder.typicode.com/todos/${postId.value}`)
        .then(response => {
            if (response.ok) {
                jsonsParsed++;
                return response.json();
            }else{
                throw new Error (response.status)
            }
        })

        .then (data => {
                if (data.completed === true) {
                    completedTrue++;
                } else {
                    completedFalse++;
                }
                statString.style.display="block";
                statString.innerHTML = `Completed: ${completedTrue}, Not completed: ${completedFalse}, Jsons Parsed: ${jsonsParsed}`;
                const h2 = document.createElement('h2');
                h2.appendChild(document.createTextNode(`Title: ${data.title}, Completed: ${data.completed}`));
                document.body.appendChild(h2);
            }

        )
        .catch(e => {
            console.log(e);
            const h2 = document.createElement('h2');
            h2.appendChild(document.createTextNode(`Ooops ${e.message}`));
            document.body.appendChild(h2);
        })}

