/***************************************************
* @author: Frederick Roegiers
* @created: 14/03/2017
* @modified: 15/03/2017
* @copyright: Artevelde University College Ghent
* @TODO: build a working memory game
***************************************************/

// create an array with happy tree friends
var happytreefriends = ['cuddles', 'handy', 'giggles', 'lumpy', 'mime', 'monkey', 'nutty', 'pop'];

// duplicate the content of this array
var doublefriends = happytreefriends.concat(happytreefriends);

// shuffle the array
shuffle(doublefriends);
 
// initialize all blocks, put them in an array
var blocks = document.getElementsByClassName('memory-block');

// initialize url params
var urlPrefix = "https://rogerthat.be/images/praktijk5/";
var urlSuffix = ".png";

// initialize an empty array that will contain the active blocks
var activeBlocks = [];

// loop through each block to add functionality
for(var i = 0; i < blocks.length; i++) {
  
  // combine url
  var url = urlPrefix + doublefriends[i] + urlSuffix;
  
  // add the background image to each block + add a class
  blocks[i].style.backgroundImage = 'url('+url+')';
  blocks[i].className += " " + doublefriends[i];

}

var counter = 0;
var clickedx2 = false;
    for(var i=0; i<blocks.length; i++)
    {
        if(clickedx2 == false)
        {
            blocks[i].addEventListener("click", function (e) 
            {
                console.log(activeBlocks);
                if(counter < 3)
                {
                    ++counter;
                    e.currentTarget.style.opacity = 1;
                    e.currentTarget.classList.add("clicked");
                    activeBlocks.push(e.currentTarget);

                    setTimeout(() => {
                        if(counter==2)
                    {
                        clickedx2 = true;
                        if(activeBlocks[0].style.backgroundImage == activeBlocks[1].style.backgroundImage)
                        {
                            counter = 0;
                            activeBlocks = [];
                            clickedx2 = false;
                        }else
                        {
                            counter = 0;
                            activeBlocks.forEach(element => {
                            element.style.opacity = 0;
                            });
                            activeBlocks = [];
                            clickedx2 = false;
                        }
                    }
                    }, 1500);
                }
            });
        }
    }



/**
 * Shuffles array in place.
 * @param {Array} a items The array containing the items.
 */
function shuffle(a) {
    var j, x, i; 
    for (i = a.length; i; i--) {
        j = Math.floor(Math.random() * i);
        x = a[i - 1];
        a[i - 1] = a[j];
        a[j] = x;
    }
}