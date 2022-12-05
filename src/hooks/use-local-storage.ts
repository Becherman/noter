/**
 * const {write, read, remove, flush} = useLocalStorage();
 *
 * const notes = read('notes');
 *
 * write('notes', [...notes, item]);
 * remove('notes');
 * flush();
 */
export const useLocalStorage = () => {
  const ls = window?.localStorage;

  const read = (key: string): unknown | null => {
    try {
      const record = ls.getItem(key);
      return record ? JSON.parse(record) : null;
    } catch (error) {
      console.error(error);
      // show toast message later
    }
  };

  const write = (key: string, value: unknown) => {
    try {
      const serializedValue = JSON.stringify(value);
      ls.setItem(key, serializedValue);
    } catch (error) {
      console.error(error);
      // show toast message later
    }
  };

  const remove = (key: string) => {
    try {
      ls.removeItem(key);
    } catch (error) {
      console.error(error);
    }
  };

  const flush = () => {
    try {
      ls.clear()
    } catch (error) {
      console.error(error);
    }
  };

  return {
    write,
    read,
    remove,
    flush,
  };
};
