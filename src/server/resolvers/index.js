import { mergeResolvers  } from 'merge-graphql-schemas';
import User from './User';
import Verse from './Verse';

const resolvers = [
	User,
	Verse
];

export default mergeResolvers (resolvers);