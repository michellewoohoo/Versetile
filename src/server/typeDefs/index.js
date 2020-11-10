import { mergeTypes } from 'merge-graphql-schemas';
import User from './User/index.graphql';
import Verse from './Verse/index.graphql';

const types = [
	User,
	Verse
];

export default mergeTypes(types, { all: true });