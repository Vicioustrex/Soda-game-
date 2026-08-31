				    let keys = {};
				
				    window.addEventListener("keydown", (e) => {
				        e.preventDefault();
				        keys[e.key] = true;
				    })
				
				    window.addEventListener("keyup", (e) => {
				        delete keys[e.key];
				    })
				
				let mousex = 0;
				let mousey = 0;
				
				    window.addEventListener("mousemove", (e) => {
				        mousex = e.x;
				        mousey = e.y;
				    })