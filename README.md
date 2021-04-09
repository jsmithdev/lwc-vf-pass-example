# lwc-flow-example

Example of lwc in a VF page (passing in values, giving values back)

## About

contains:

- minimal page & aura definition

- minimal lwc taking data from VF and given other, merged data back

## Deploy

Covert with SFDX; This creates a folder called `deploy`

```console
sfdx force:source:convert -r force-app -d deploy
```

Now you can deploy from the resulting `deploy` directory

```console
sfdx force:mdapi:deploy -d deploy -w -1  --verbose 
```

📌  Above deploys to the default org set

- Add `-u user@domain.com` or `-u alias` to deploy else where
- To run tests add `-l RunSpecifiedTests -r ApexTestName`

Results should more or less mirror below:

```console
jamie@the-brain:~/repo/lwc-vf-pass-example$ sfdx force:source:convert -r force-app -d deploy

Source was successfully converted to Metadata API format and written to the location: /home/jamie/repo/lwc-vf-pass-example/deploy

jamie@the-brain:~/repo/lwc-vf-pass-example$ sfdx force:mdapi:deploy -d deploy -w -1  --verbose 

Using specified username me@jsmith.dev

Job ID | 0Af1U000017nSmwSAE
MDAPI PROGRESS | ████████████████████████████████████████ | 3/3 Components

TYPE                      FILE                                NAME                  ID
────────────────────────  ──────────────────────────────────  ────────────────────  ──────────────────
                          deploy/package.xml                  package.xml
ApexPage                  deploy/pages/lwcVfPassExample.page  lwcVfPassExample      0661U000005fa38QAA
AuraDefinitionBundle      deploy/aura/LwcVfPassExampleAura    LwcVfPassExampleAura  0Ab1U000001PcnqSAC
LightningComponentBundle  deploy/lwc/lwcVfPassExample         lwcVfPassExample      0Rb1U000000PMxoSAG

```

----------------------

Thrown together with 💝 by [Jamie Smith](https://jsmith.dev)
