// Code borrowed and modified from Padre Mucho
// https://jsfiddle.net/pmrotule/dyhxdd44/17/

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  standalone: true,
  name: 'pluralize',
})
export class PluralizePipe implements PipeTransform {
  data = {
    plural: {
      '(quiz)$': '$1zes',
      '^(ox)$': '$1en',
      '([m|l])ouse$': '$1ice',
      '(matr|vert|ind)ix|ex$': '$1ices',
      '(x|ch|ss|sh)$': '$1es',
      '([^aeiouy]|qu)y$': '$1ies',
      '(hive)$': '$1s',
      '(?:([^f])fe|([lr])f)$': '$1$2ves',
      '(shea|lea|loa|thie)f$': '$1ves',
      sis$: 'ses',
      '([ti])um$': '$1a',
      '(tomat|potat|ech|her|vet)o$': '$1oes',
      '(bu)s$': '$1ses',
      '(alias)$': '$1es',
      '(octop)us$': '$1i',
      '(ax|test)is$': '$1es',
      '(us)$': '$1es',
      '([^s]+)$': '$1s',
    },
    singular: {
      '(quiz)zes$': '$1',
      '(matr)ices$': '$1ix',
      '(vert|ind)ices$': '$1ex',
      '^(ox)en$': '$1',
      '(alias)es$': '$1',
      '(octop|vir)i$': '$1us',
      '(cris|ax|test)es$': '$1is',
      '(shoe)s$': '$1',
      '(o)es$': '$1',
      '(bus)es$': '$1',
      '([m|l])ice$': '$1ouse',
      '(x|ch|ss|sh)es$': '$1',
      '(m)ovies$': '$1ovie',
      '(s)eries$': '$1eries',
      '([^aeiouy]|qu)ies$': '$1y',
      '([lr])ves$': '$1f',
      '(tive)s$': '$1',
      '(hive)s$': '$1',
      '(li|wi|kni)ves$': '$1fe',
      '(shea|loa|lea|thie)ves$': '$1f',
      '(^analy)ses$': '$1sis',
      '((a)naly|(b)a|(d)iagno|(p)arenthe|(p)rogno|(s)ynop|(t)he)ses$':
        '$1$2sis',
      '([ti])a$': '$1um',
      '(n)ews$': '$1ews',
      '(h|bl)ouses$': '$1ouse',
      '(corpse)s$': '$1',
      '(us)es$': '$1',
      s$: '',
    },
    irregular: {
      move: 'moves',
      foot: 'feet',
      goose: 'geese',
      sex: 'sexes',
      child: 'children',
      man: 'men',
      tooth: 'teeth',
      person: 'people',
    },
    uncountable: [
      'sheep',
      'fish',
      'deer',
      'moose',
      'series',
      'species',
      'money',
      'rice',
      'information',
      'equipment',
    ],
  };

  readonly plural: { [key: string]: string } = this.data.plural;
  readonly singular: { [key: string]: string } = this.data.singular;
  readonly irregular: { [key: string]: string } = this.data.irregular;
  readonly uncountable: Set<string> = new Set(this.data.uncountable);

  transform(word: string, count: number) {
    // if no modification is needed, return the word as-is
    if (this.uncountable.has(word.toLowerCase())) return word;

    for (const [key, value] of Object.entries(this.irregular)) {
      if (word.toLowerCase() === key) return value;
    }

    const pattern = new RegExp(`${word}$`, 'i');
    const replacement = this.plural[word];

    if (replacement !== undefined && pattern.test(word))
      return word.replace(pattern, replacement);

    for (const [key, value] of Object.entries(this.plural)) {
      const pattern = new RegExp(key, 'i');
      if (pattern.test(word)) return word.replace(pattern, value);
    }

    return word;
  }
}
