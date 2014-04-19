12m12k-month4
=============

This is the month #4 of the program 12 months 12 katas. You can find more information here (Spanish): http://www.programania.net/pruebas-unitarias/tdd-12-meses-12-katas/

This month, there's a small kata (1 hour) to evolve the Mars Rover kata. Source: http://craftsmanship.sv.cmu.edu/katas/mars-rover-kata

Rules: 

* Develop an api that moves a rover around on a grid.
* You are given the initial starting point (x,y) of a rover
* The rover receives a character array of commands.
* Implement commands that move the rover forward/backward (f,b).
* Implement commands that move the rover left/right (l,r).

All of this is already implemented in commit https://github.com/alvarogarcia7/12m12k-month4/commit/eb286d11482bf914eb777433ddf947afdbc55cbd

You have to implement some pattern(s) to remove the messy code in Rover.receive method. Specifically, this code:

		if(command === "l"){
			this.position = new Position(x-1, y);
		} else if (command === "r") {
			this.position = new Position(x+1, y);
		} else if (command === "b") {
			this.position = new Position(x, y-1);
		} else { //forward
			this.position = new Position(x, y+1);
		}
		
The proposed pattern is the Strategy pattern. Maybe some kind of Factory could be useful.

Hint: the factory will be useful to decouple the "reading the characters to associated values". 
Hint: the strategy will be useful to "associate the value to a certain object".

Links:
* http://en.wikipedia.org/wiki/Strategy_pattern
* http://en.wikipedia.org/wiki/Factory_method_pattern
* http://geekswithblogs.net/subodhnpushpak/archive/2009/09/18/the-23-gang-of-four-design-patterns-.-revisited.aspx

Send me the code via email if you have my work email account or a pull request and we'll review the code
