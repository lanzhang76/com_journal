#### Jan6

pun generation with surprise
* global and local context
* retrieve and swap
* part-of-speech tag - replaces alternative word
* Wordnet path similarity, POS tags
* synset: a set of synonyms that share a common meaning.
* hypernyms and hyponym

> hypernyms - the word that has broader meaning and more specific words underneath <br>
hyponym - the more specific word <br>
.closure(lambda s:s.hypernyms()) vs .closure(lambda s:s.hyponyms())

Wordnet exploration
> Mophy for turning plural words to singular with inflectional ending rules <br>
synsets("word", pos = '{n/v/a}').definition .examples()
<br>

#### Jan7

reading: https://reallifemag.com/definition-not-found/
* asemic writing
* Cross-linguistic onomatopoeias
* Christine Sun kim - ASL and music score sheet
* Kanno and Takahiro Yamaguchi - sensless drawing bot 

>  It’s a robot laughing alone with salad, and its inner life, its own well of lactic acid that it draws from to express itself, is off-limits to us.

allison parrish N-gram and Markov chain 
n-grams
* character-level n-grams verus word-level n-grams

re- regex - regular expression - 
clean corpus!
* r"\." - raw text literal search
* \. matches with every character except a new line
* \d matches digital numbers  \D matches everything not a digit \d{3} means 3 of digits 
* \w everything is lower, upper, underscore 
* \s matches all spaces, new lines, tabs \S everything but
* \b matches when there is a word boundary before 
* ^ at the start
* $ end of the string
* [-.,] only matches with what's in the square brackets. - or .; not all but one from the set
* - represents range r'[a-zA-Z]' will be lower or upper
* [^b] negate b = ignore b 
* quantifiers: 

> * 0 or more <br>
> + 1 or more <br>
> ? 0 or one
> {3} exact number
> {3,4} range from 3-4

example1: capture the phone number
```
text = '''
324.235.153
'''
pattern = re.compile(r'\d{3}.\d{3}.\d{4}')
matches = pattern.finditer(text)
for match in matches:
	print(match)
```
example2: capture all the urls
```
urls = '''
https://www.google.com
http://coe.com
https://youtube.com
https://www.nasa.gov
pattern = re.compile(r'https?://(www\.)?\w+\.\w'+)
```

* + \.(com|edu|net) or
* match.group(1) accessing references in expressions 
* substitution: outputs urls only with group 2 and 3 aka without "wwww."
```
sub = pattern.sub(r'\2\3',urls, re.IGNORECASE)
```
```
sub = pattern.findall(r'\2\3',urls)
```


