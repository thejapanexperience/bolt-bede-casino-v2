import { languageMerger } from '@bedegaming/bolt-v2';
import * as en_GB from './en_GB.yml';
import * as en_US_base from './en_US.yml';

const en_US = languageMerger(en_GB, en_US_base);

export { en_GB, en_US };
