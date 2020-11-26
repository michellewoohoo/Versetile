import { mergeResolvers  } from 'merge-graphql-schemas';
import User from './User';
import Passage from './Passage';

const resolvers = [
	User,
	Passage
];

export default mergeResolvers (resolvers);