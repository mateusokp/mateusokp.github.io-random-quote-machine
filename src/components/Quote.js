import React from "react";
import Card from "./Card";
import Button from "./Button";

import classes from "./Quote.module.css";
const Quote = (props) => {
let link = ''    

  const createTweetLink = (event) => {
    let ahref = ["https://twitter.com/intent/tweet?text=", props.quote];
    return ahref.join("");
  };

  return (
    <Card>
      <div id="quote-box" >
        <h3 id="text" className={classes.text}>
          "{props.quote}"
        </h3>
        <h4 id="author" className={classes.text}>- {props.author}</h4>
        <footer className={classes.actions}>
          <Button id="new-quote" click={props.newQuote} color={props.newColor}>
            Generate new Quote
          </Button>
          <Button color="#1DA1F2">
            <a id="tweet-quote" click={link = createTweetLink()} href={link} target="blank">
              Tweet this
            </a>
          </Button>
        </footer>
      </div>
    </Card>
  );
};

export default Quote;
