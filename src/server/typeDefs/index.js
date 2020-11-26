import { mergeTypes } from 'merge-graphql-schemas';
import User from './User/index.graphql';
import Passage from './Passage/index.graphql';

const types = [
	User,
	Passage
];

export default mergeTypes(types, { all: true });
