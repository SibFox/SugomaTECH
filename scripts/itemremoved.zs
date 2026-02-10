import crafttweaker.api.item.IItemStack;
import crafttweaker.api.recipe.CraftingTableRecipeManager;
import crafttweaker.api.recipe.RecipeManagerWrapper;

function removeFrom_SophBackpacks(recipes as string[]) as void
{
    for recipe in recipes {
        craftingTable.removeByName([ "sophisticatedbackpacks:" + recipe ]);
    }
}

// removeFrom_SophBackpacks([ "copper_backpack", "iron_backpack", "iron_backpack_from_copper", "gold_backpack", "diamond_backpack" ]);

craftingTable.remove(<item:sophisticatedstorage:stack_upgrade_tier_3>);
craftingTable.remove(<item:sophisticatedstorage:stack_upgrade_tier_4>);
craftingTable.remove(<item:sophisticatedstorage:stack_upgrade_tier_5>);
craftingTable.remove(<item:sophisticatedstorage:stack_upgrade_omega_tier>);

// craftingTable.remove(<item:mffs:steel_compound>);
// craftingTable.removeByModid("mffs");
// furnace.removeByModid("mffs");

// smithing.remove(<item:sophisticatedbackpacks:netherite_backpack>);

craftingTable.remove(<item:hole_filler_mod:throwable_hole_filler_lava>);
craftingTable.remove(<item:hole_filler_mod:throwable_hole_filler_water>);
craftingTable.remove(<item:hole_filler_mod:throwable_hole_maker>);