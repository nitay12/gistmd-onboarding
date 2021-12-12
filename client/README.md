## Frontend

### Tech
- React
- Redux (RTK)
- MUI

### Components

#### Stepper
Used to determine the current step in the form
##### props
###### steps
Array of strings (steps labels) 
###### activeStep
Number - represnt the active step
###### icons
object of font-icons names (used FA in this project).

example:{
1: "ageIcon"
2: "languageIcon"
3: ....
}

#### CustomIcon
Styled icon consist to the Gistmd colors
##### props
###### icon
font-icon string
###### completed
boolean
###### active
boolean
#### IconButton
Same style as CustomIcon with a button wrap
#### DatePicker 
MUI StaticDatePicker
#### NavButtons
NEXT/PREVIOUS buttons - the NEXT button switched to SUBMIT on the last step. The buttons changing the currentQuestion and options by using redux.
