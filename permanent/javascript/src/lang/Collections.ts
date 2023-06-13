import { h1, h2, log, notes, output } from '../util/Util';

interface Name {
  first: string;
  last: string;
}

const demoMap = () => {
  const name1: Name = {
    first: 'john',
    last: 'doe',
  };

  const name2: Name = {
    first: 'jane',
    last: 'doe',
  };

  const name3: Name = {
    first: 'john',
    last: 'smith',
  };

  const names = [name1, name2];

  var formattedNames: Name[] = [];
  names.forEach((name) => {
    if (name.first === 'john') {
      formattedNames.push({ first: 'John', last: 'Smith' });
    } else {
      formattedNames.push(name);
    }
  });
  console.log(formattedNames[0]);
};

export default function demoCollections() {
  h1('Collections');
  demoMap();
}
