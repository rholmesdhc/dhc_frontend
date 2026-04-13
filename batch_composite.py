import os
from PIL import Image

def composite_provider(template_path, provider_path, output_path):
    try:
        template = Image.open(template_path).convert("RGBA")
        provider = Image.open(provider_path).convert("RGBA")
        tw, th = template.size
        pw, ph = provider.size
        x = (tw - pw) // 2
        y = (th - ph) // 2
        template.paste(provider, (x, y), provider)
        template.save(output_path, "PNG")
        print(f"Success: {output_path}")
    except Exception as e:
        print(f"Failed {provider_path}: {e}")

providers = [
  {
    "name": "Dr. Nadia Bethley",
    "title": "PhD Clinical Psychology",
    "image": "drbethely_base1.png"
  },
  {
    "name": "Dr. Inge Ford",
    "title": "DMD Doctor of Medicine in Dentistry",
    "image": "fotrd1.png"
  },
  {
    "name": "Dr. Lauren Adams",
    "title": "PhD.",
    "image": "LaurenAdams2.png"
  },
  {
    "name": "Alyssa Simmons",
    "title": "FNP",
    "image": "Alyssa_Simmons_FNP_Family_Nurse_Practitioner_Provider_Team_Photo_Box.png"
  },
  {
    "name": "Felicia Norris White",
    "title": "NP",
    "image": "Felicia_White_FNP_Provider_Team_Photo_Box.png"
  },
  {
    "name": "Sherrica Smith",
    "title": "PMHNP-BC, FNP-C",
    "image": "Sherrica_Smith_DNP_FNP-C_Provider_Team_Photo_Box.png"
  },
  {
    "name": "Barbara Williams",
    "title": "FNP",
    "image": "Bwilliams_website_pic2.png"
  },
  {
    "name": "Jennifer Kurts",
    "title": "FNP",
    "image": "Jennifer_Kurts_FNP_Family_Nurse_Practitioner_Provider_Team_Photo_Box.png"
  },
  {
    "name": "Valerie Antici",
    "title": "FNP-BC",
    "image": "Valeri-Antici-1.png"
  },
  {
    "name": "Queeneice Ganison",
    "title": "NP",
    "image": "QuieneseGannison1.png"
  },
  {
    "name": "Tara Davis",
    "title": "FNP-Pediatrics",
    "image": "TaraDavis-FNP1ab-2.png"
  },
  {
    "name": "Wyconda Thomas",
    "title": "PMHNP-C",
    "image": "Wyconda-Thomas1.png"
  },
  {
    "name": "Mary Bolden",
    "title": "FNP-BC",
    "image": "MaryBolden-FNP1ab-3aa.png"
  },
  {
    "name": "Megan Mccoy",
    "title": "PA",
    "image": "provider_image1_base_MeganMccoy3.png"
  }
]

template_path = r"C:\Users\rholmes\antigravity_projects\dhc-frontend\public\images\provider_proto_template.png"
base_dir = r"C:\Users\rholmes\antigravity_projects\dhc-frontend\public\images\providers"

for p in providers:
    base_img = p["image"]
    name_clean = p["name"].replace(" ", "_").replace(".", "").replace(",", "")
    
    transf1 = base_img.replace(".png", "_transparent.png")
    
    p_path = os.path.join(base_dir, transf1)
    if not os.path.exists(p_path):
        print(f"Warning: {p_path} not found.")
        continue
        
    o_path = os.path.join(base_dir, f"{name_clean}_template.png")
    composite_provider(template_path, p_path, o_path)
    
print("Done")
