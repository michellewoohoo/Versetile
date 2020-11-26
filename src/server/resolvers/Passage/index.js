import axios from 'axios';

export default{
  Query: {
    getPassage: async (parent, args, context, info) => {
      try{
        const { userInput } = args;
        const parseInput = userInput.split(',')[0];
        const { data, error } = await axios.get(`https://bible-api.com/${encodeURI(parseInput)}`);
        if(data && data.verses && data.verses.length > 0) {
          const verses = data.verses;
          const fullVerse = verses.map(verse => verse.text).join(" ");
          return {text: fullVerse, passage: parseInput}
        }
      }catch(e){
        console.log(e)
      }
      return;
    }
  }
}