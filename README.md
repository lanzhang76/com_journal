## journal incentives

This journal is used to document experimental progress on my thesis around "computational comedy" where I explore methodologies and rules for creating generative procedures and comic text.


### Jan6

#### pun generation with surprise
* global and local context
* retrieve and swap
* part-of-speech tag - replaces alternative word
* Wordnet path similarity, POS tags
* synset: a set of synonyms that share a common meaning.
* hypernyms and hyponym

> hypernyms - the word that has broader meaning and more specific words underneath <br>
hyponym - the more specific word <br>
.closure(lambda s:s.hypernyms()) vs .closure(lambda s:s.hyponyms())

#### Wordnet exploration
> Mophy for turning plural words to singular with inflectional ending rules <br>
synsets("word", pos = '{n/v/a}').definition .examples()
<br>

### Jan7

#### reading: https://reallifemag.com/definition-not-found/
* asemic writing
* Cross-linguistic onomatopoeias
* Christine Sun kim - ASL and music score sheet
* Kanno and Takahiro Yamaguchi - sensless drawing bot 

>  It’s a robot laughing alone with salad, and its inner life, its own well of lactic acid that it draws from to express itself, is off-limits to us.

#### allison parrish N-gram and Markov chain 
n-grams
* character-level n-grams verus word-level n-grams

#### re- regex - regular expression - 
clean corpus!

* r'\n' raw text literal search 
* r'\\.' matches with every character except a new line 
* \\d matches digital numbers  \D matches everything not a digit \d{3} means 3 of digits | 
* \w everything is lower, upper, underscore 
* \s matches all spaces, new lines, tabs \S everything but
* \b matches when there is a word boundary before 
* ^ at the start
* $ end of the string
* [-.,] only matches with what's in the square brackets. - or .; not all but one from the set
* \- represents range r'[a-zA-Z]' will be lower or upper
* [^b] negate b = ignore b 
* quantifiers: 

> \* 0 or more <br>
> \+ 1 or more <br>
> ? 0 or one <br>
> {3} exact number <br>
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

* \+ \\.(com|edu|net) or
* match.group(1) accessing references in expressions 
* substitution: outputs urls only with group 2 and 3 aka without "wwww."
```
sub = pattern.sub(r'\2\3',urls, re.IGNORECASE)
```
```
sub = pattern.findall(r'\2\3',urls)
```

<br>

### Jan8

#### python fundamentals recap
* iteration, mutability 

#### markov chain 
* n-grams functions
* predict next word 
* append to the current sentence
* end-of-a-sentence detection
* TODO: takes any input lenghth
* clamp function
	- max(min_range, min(value,max_range))
	- if it's smaller than the min, it's the bigger one whichi is the min
	- if it's larger than the max, it's smaller then it takes itself 

```
def clamp(min_val,value,max_val):
    num = max(min_val,min(value,max_val))
    return num
```

* TODO: regex end of sentence check
	- https://ftp.gnu.org/old-gnu/Manuals/emacs-lisp-intro/html_node/sentence-end.html
	- test: https://www.regextester.com/
	- test: https://pythex.org/


<br>

### Jan9

#### regular expression for end of sentence
* end of sentence - solved

#### free-length parser
* abled to create a function that takes in any input length
* the input is parsed and split into tuples
* a new markov n-gram dictionary will be created based on the input length
* if the current input has key values in the created dictionary, the word gets append to the sentence
* if it doesn't, the firt word 

<br>

### Jan10
#### marmarkov
* turn it into a terminal program 
* get more comedy transcripts for an output probability check
* figure out metrics and quality control for the input 
* create a function that loads a bunch of scripts

#### another end of sentence detection 
* line.strip().split() for line in file.readlines() => gets a list of lists of words
```
for i in range(len(words)): 
    seq = list(t[:] for t in words[i]) + [None]
    print(seq)
```

#### bugs
* needs to fix the filter words - "kinda like" needs to have the same "like"


<br>

### Jan14

#### TO DOs:
1. fix counter function 
2. add/subtract style in the original corpus 
3. book of shaders 



