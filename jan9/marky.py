import re
import random
import pandas as pd
import os

# the flow when someone tries to create a new model for generation
# 1. preparing the text
# 2. train and generate

context = {}
selections = {
    'bill maher': [0, 4, 8, 13, 15, 17, 91, 94, 102, 104],
    'Sarah Silverman': [84],
    'Aziz Ansari': [23],
    'Jerry Seinfeld': [47],
    'Amy Schumer': [49]
}


default_file = '../jan7/300Full_transcripts.csv'


def addToCorpus(csv_file=default_file, name, context=context):
    file = pd.read_csv(csv_file)
    if selections.get(name) is not None:
        context[name] = [file.scripts[i] for i in selections.get(name)]
        print(f"{name} is added to the corpus")
        corpus = ""
        for i in context:
            for e in context[i]:
                corpus += e
        corpus = corpus.replace('\', \'', ' ').replace(
            '\']', '').replace('[\'', '').replace('xa0', ' ').replace('\\', '')
    else:
        print("your selection is incorrect. Try again")
    return corpus


def delFromCorpus(context_dict=context, name):
    try:
        context_dict.pop(name)
        print(f"{name} is deleted from the dictionary")
    except:
        print(f"sorry, {name} is not in the dictionary. It cannot be deleted.")
        print(f"{[i for i in context]} are in the dictionary.")
