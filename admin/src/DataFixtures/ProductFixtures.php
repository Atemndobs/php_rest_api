<?php

namespace App\DataFixtures;

use App\Entity\Product;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Common\Persistence\ObjectManager;
use Symfony\Component\Security\Core\Encoder\UserPasswordEncoderInterface;

class ProductFixtures extends Fixture
{


    public function load(ObjectManager $manager)
    {
        foreach ($this->getProductData() as [$name, $description, $image ])
        {
            $product = new Product();

            $product->setName($name);
            $product->setDescription($description);
            $product->setImage($image)
            ;
            $manager->persist($product);
        }

        $manager->flush();
    }

    private function getProductData(): array
    {
        return [
            [ 'bird', 'flying Bird for Birding','https://i.picsum.photos/id/100/2500/1656.jpg'],
            [ 'Biker', 'fTHe Bike Biker','https://i.picsum.photos/id/1024/1920/1023.jpg'],
            [ 'Celebrity Dog', 'Cool Doggy dog','https://i.picsum.photos/id/1002/4312/2868.jpg'],
            [ 'canoe paddle', 'the canoe paddler','https://i.picsum.photos/id/101/2621/1747.jpg'],
            [ 'Bible', 'The Holy Bible','https://i.picsum.photos/id/1010/5184/3456.jpg'],
            [ 'Work space', 'Mac book work session','https://i.picsum.photos/id/1003/1181/1772.jpg'],

        ];
    }
}
