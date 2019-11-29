# HigherOrLower - User Guide - Conor Shortt

## INSTRUCTIONS:

* Home page contains two buttons:
	* Register allows you to push a user to the database
	* Login allows you to get users from the database and checks if any match your login details.

* Users page allows you to view all current users on the database including information. It also contains two buttons:
	* Delete user button, which completely removes the user from the database.
	* Edit user button, which allows you to re-enter the users details and then sends a put request to the database.

* Game page contains the gambling aspect of the website. The user is given 20 'points'.
	* *This page implements the deckofcards API which saved a lot of hard coding in the logic.*
	* You can adjust the bet amount by using the slider.
	* Click one of two buttons, "Higher" or "Lower".
	* This will draw a new card from the deck and compares it to the previous card.
	* A correct guess adds your bet amount to your points total, and incorrect guess subtracts.
	
### References:
* https://deckofcardsapi.com/
* https://github.com/MERN-Application