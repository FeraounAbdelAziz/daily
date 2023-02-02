import { Autocomplete } from '@mantine/core';

export default function Demo() {
  return (
    <>
      {/* Data as an array of strings */}
      <Autocomplete data={['React', 'Angular', 'Svelte', 'Vue']} />

      {/* Data as an array of objects: Minimal example (same as first example above) */}
      <Autocomplete
        data={[{ value: 'React' }, { value: 'Angular' }, { value: 'Svelte' }, { value: 'Vue' }]}
      />

      {/* Additional data properties for custom item component (see documentation below) */}
      <Autocomplete
        // Your custom item component with data properties
        itemComponent={({ value, color, email, name }) => <div />}
        data={[
          {
            value: 'bob@handsome.inc',
            color: 'red',
            email: 'bob@handsome.inc',
            name: 'Bob Handsome',
          },
          {
            value: 'bill@outlook.com',
            color: 'teal',
            email: 'bill@outlook.com',
            name: 'Bill Gates',
          },
          { value: 'amy@wong.cn', color: 'blue', email: 'amy@wong.cn', name: 'Amy Wong' },
        ]}
      />
    </>
  );
}